// Generated from /Users/alialiev/Desktop/antrl-test/antlr-c3/src/grammar/Expr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { ExprListener } from "./ExprListener.js";
import { ExprVisitor } from "./ExprVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class ExprParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly LOGICAL_OPERATOR = 3;
    public static readonly VALUE = 4;
    public static readonly OPERATOR = 5;
    public static readonly FIELD_NAME = 6;
    public static readonly WS = 7;
    public static readonly RULE_seaQl = 0;
    public static readonly RULE_expression = 1;
    public static readonly RULE_fieldConstraint = 2;
    public static readonly RULE_field = 3;
    public static readonly RULE_value = 4;
    public static readonly RULE_logical_operator = 5;

    public static readonly literalNames = [
        null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, "LOGICAL_OPERATOR", "VALUE", "OPERATOR", "FIELD_NAME", 
        "WS"
    ];
    public static readonly ruleNames = [
        "seaQl", "expression", "fieldConstraint", "field", "value", "logical_operator",
    ];

    public get grammarFileName(): string { return "Expr.g4"; }
    public get literalNames(): (string | null)[] { return ExprParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return ExprParser.symbolicNames; }
    public get ruleNames(): string[] { return ExprParser.ruleNames; }
    public get serializedATN(): number[] { return ExprParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, ExprParser._ATN, ExprParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public seaQl(): SeaQlContext {
        let localContext = new SeaQlContext(this.context, this.state);
        this.enterRule(localContext, 0, ExprParser.RULE_seaQl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 12;
            this.expression(0);
            this.state = 13;
            this.match(ExprParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 2;
        this.enterRecursionRule(localContext, 2, ExprParser.RULE_expression, _p);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 21;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case ExprParser.FIELD_NAME:
                {
                this.state = 16;
                this.fieldConstraint();
                }
                break;
            case ExprParser.T__0:
                {
                this.state = 17;
                this.match(ExprParser.T__0);
                this.state = 18;
                this.expression(0);
                this.state = 19;
                this.match(ExprParser.T__1);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 31;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new ExpressionContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, ExprParser.RULE_expression);
                    this.state = 23;
                    if (!(this.precpred(this.context, 2))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                    }
                    this.state = 24;
                    this.match(ExprParser.WS);
                    this.state = 25;
                    this.logical_operator();
                    this.state = 26;
                    this.match(ExprParser.WS);
                    this.state = 27;
                    this.expression(3);
                    }
                    }
                }
                this.state = 33;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 1, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public fieldConstraint(): FieldConstraintContext {
        let localContext = new FieldConstraintContext(this.context, this.state);
        this.enterRule(localContext, 4, ExprParser.RULE_fieldConstraint);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 34;
            this.field();
            this.state = 35;
            this.match(ExprParser.WS);
            this.state = 36;
            this.match(ExprParser.OPERATOR);
            this.state = 37;
            this.match(ExprParser.WS);
            this.state = 38;
            this.value();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public field(): FieldContext {
        let localContext = new FieldContext(this.context, this.state);
        this.enterRule(localContext, 6, ExprParser.RULE_field);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.match(ExprParser.FIELD_NAME);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public value(): ValueContext {
        let localContext = new ValueContext(this.context, this.state);
        this.enterRule(localContext, 8, ExprParser.RULE_value);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 42;
            this.match(ExprParser.VALUE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public logical_operator(): Logical_operatorContext {
        let localContext = new Logical_operatorContext(this.context, this.state);
        this.enterRule(localContext, 10, ExprParser.RULE_logical_operator);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 44;
            this.match(ExprParser.LOGICAL_OPERATOR);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,7,47,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,1,0,1,0,
        1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,22,8,1,1,1,1,1,1,1,1,1,1,1,1,1,5,
        1,30,8,1,10,1,12,1,33,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,
        4,1,5,1,5,1,5,0,1,2,6,0,2,4,6,8,10,0,0,42,0,12,1,0,0,0,2,21,1,0,
        0,0,4,34,1,0,0,0,6,40,1,0,0,0,8,42,1,0,0,0,10,44,1,0,0,0,12,13,3,
        2,1,0,13,14,5,0,0,1,14,1,1,0,0,0,15,16,6,1,-1,0,16,22,3,4,2,0,17,
        18,5,1,0,0,18,19,3,2,1,0,19,20,5,2,0,0,20,22,1,0,0,0,21,15,1,0,0,
        0,21,17,1,0,0,0,22,31,1,0,0,0,23,24,10,2,0,0,24,25,5,7,0,0,25,26,
        3,10,5,0,26,27,5,7,0,0,27,28,3,2,1,3,28,30,1,0,0,0,29,23,1,0,0,0,
        30,33,1,0,0,0,31,29,1,0,0,0,31,32,1,0,0,0,32,3,1,0,0,0,33,31,1,0,
        0,0,34,35,3,6,3,0,35,36,5,7,0,0,36,37,5,5,0,0,37,38,5,7,0,0,38,39,
        3,8,4,0,39,5,1,0,0,0,40,41,5,6,0,0,41,7,1,0,0,0,42,43,5,4,0,0,43,
        9,1,0,0,0,44,45,5,3,0,0,45,11,1,0,0,0,2,21,31
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprParser.__ATN) {
            ExprParser.__ATN = new antlr.ATNDeserializer().deserialize(ExprParser._serializedATN);
        }

        return ExprParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprParser.literalNames, ExprParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ExprParser.vocabulary;
    }

    private static readonly decisionsToDFA = ExprParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class SeaQlContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(ExprParser.EOF, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_seaQl;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterSeaQl) {
             listener.enterSeaQl(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitSeaQl) {
             listener.exitSeaQl(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitSeaQl) {
            return visitor.visitSeaQl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public fieldConstraint(): FieldConstraintContext | null {
        return this.getRuleContext(0, FieldConstraintContext);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ExprParser.WS);
    	} else {
    		return this.getToken(ExprParser.WS, i);
    	}
    }
    public logical_operator(): Logical_operatorContext | null {
        return this.getRuleContext(0, Logical_operatorContext);
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_expression;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldConstraintContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public field(): FieldContext {
        return this.getRuleContext(0, FieldContext)!;
    }
    public WS(): antlr.TerminalNode[];
    public WS(i: number): antlr.TerminalNode | null;
    public WS(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(ExprParser.WS);
    	} else {
    		return this.getToken(ExprParser.WS, i);
    	}
    }
    public OPERATOR(): antlr.TerminalNode {
        return this.getToken(ExprParser.OPERATOR, 0)!;
    }
    public value(): ValueContext {
        return this.getRuleContext(0, ValueContext)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_fieldConstraint;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterFieldConstraint) {
             listener.enterFieldConstraint(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitFieldConstraint) {
             listener.exitFieldConstraint(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitFieldConstraint) {
            return visitor.visitFieldConstraint(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FIELD_NAME(): antlr.TerminalNode {
        return this.getToken(ExprParser.FIELD_NAME, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_field;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterField) {
             listener.enterField(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitField) {
             listener.exitField(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitField) {
            return visitor.visitField(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ValueContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public VALUE(): antlr.TerminalNode {
        return this.getToken(ExprParser.VALUE, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_value;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterValue) {
             listener.enterValue(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitValue) {
             listener.exitValue(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitValue) {
            return visitor.visitValue(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Logical_operatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LOGICAL_OPERATOR(): antlr.TerminalNode {
        return this.getToken(ExprParser.LOGICAL_OPERATOR, 0)!;
    }
    public override get ruleIndex(): number {
        return ExprParser.RULE_logical_operator;
    }
    public override enterRule(listener: ExprListener): void {
        if(listener.enterLogical_operator) {
             listener.enterLogical_operator(this);
        }
    }
    public override exitRule(listener: ExprListener): void {
        if(listener.exitLogical_operator) {
             listener.exitLogical_operator(this);
        }
    }
    public override accept<Result>(visitor: ExprVisitor<Result>): Result | null {
        if (visitor.visitLogical_operator) {
            return visitor.visitLogical_operator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
