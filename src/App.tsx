import './App.css'
import { CharStreams, CommonTokenStream } from 'antlr4ng'
import { CodeCompletionCore } from 'antlr4-c3'
import { ExprLexer } from '../generated/ExprLexer'
import { ExprParser } from '../generated/ExprParser'
import { AutoComplete } from 'antd'
import { useState } from 'react'

const keySuggestions = ['Key1', 'Key2', 'Key3', 'Key4']

const operatorSuggestions = ['=', '!=', '>', '<']

const logicalOperatorSuggestions = ['AND', 'OR']

const valueSuggestions = ['Value1', 'Value2', 'Value3', 'Value4']

const SUGGEST_BY_TOKEN = {
  [ExprLexer.FIELD_NAME]: keySuggestions,
  [ExprLexer.OPERATOR]: operatorSuggestions,
  [ExprLexer.VALUE]: valueSuggestions,
  [ExprLexer.LOGICAL_OPERATOR]: logicalOperatorSuggestions,
}

const NEXT_VALID_TOKEN: Record<number, number> = {
  [ExprLexer.FIELD_NAME]: ExprLexer.OPERATOR,
  [ExprLexer.OPERATOR]: ExprLexer.VALUE,
  [ExprLexer.VALUE]: ExprLexer.LOGICAL_OPERATOR,
  [ExprLexer.LOGICAL_OPERATOR]: ExprLexer.FIELD_NAME,
}

function parseString(string: string) {
  const inputStream = CharStreams.fromString(string)
  const lexer = new ExprLexer(inputStream)
  const tokenStream = new CommonTokenStream(lexer)

  const parser = new ExprParser(tokenStream)

  const tree = parser.expression()

  const core = new CodeCompletionCore(parser)

  const candidates = core.collectCandidates(tree.stop?.tokenIndex ?? 0)

  const keywords: number[] = []

  for (const candidate of candidates.tokens) {
    keywords.push(candidate[0])
  }

  return keywords
}

function App() {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<string[]>(
    SUGGEST_BY_TOKEN[ExprLexer.FIELD_NAME],
  )
  const [lastToken, setLastToken] = useState<number>(ExprLexer.FIELD_NAME)

  const handleSearch = (text: string) => {
    setValue(text)
    const [token] = parseString(text)

    //Если попали на пробел подсказываем по последнему валидному токену
    if (token === ExprLexer.WS) {
      const validToken = NEXT_VALID_TOKEN[lastToken]
      setOptions(
        (SUGGEST_BY_TOKEN as Record<number, string[]>)?.[validToken] ?? [],
      )
      return
    }

    setLastToken(token)
    setOptions((SUGGEST_BY_TOKEN as Record<number, string[]>)?.[token] ?? [])
  }

  return (
    <>
      <AutoComplete
        value={value}
        options={options.map((label) => ({ label, value: label }))}
        style={{ width: 500 }}
        onSearch={handleSearch}
        placeholder="QL example"
      />
    </>
  )
}

export default App
