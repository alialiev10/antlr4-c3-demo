// Generated from /Users/alialiev/Desktop/antrl-test/antlr-c3/src/grammar/Expr.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class ExprLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly LOGICAL_OPERATOR = 3;
    public static readonly VALUE = 4;
    public static readonly OPERATOR = 5;
    public static readonly FIELD_NAME = 6;
    public static readonly WS = 7;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, "LOGICAL_OPERATOR", "VALUE", "OPERATOR", "FIELD_NAME", 
        "WS"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "LOGICAL_OPERATOR", "VALUE", "OPERATOR", "FIELD_NAME", 
        "WS",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, ExprLexer._ATN, ExprLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "Expr.g4"; }

    public get literalNames(): (string | null)[] { return ExprLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return ExprLexer.symbolicNames; }
    public get ruleNames(): string[] { return ExprLexer.ruleNames; }

    public get serializedATN(): number[] { return ExprLexer._serializedATN; }

    public get channelNames(): string[] { return ExprLexer.channelNames; }

    public get modeNames(): string[] { return ExprLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,7,66,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,25,8,2,1,3,1,3,5,3,
        29,8,3,10,3,12,3,32,9,3,1,3,1,3,1,3,5,3,37,8,3,10,3,12,3,40,9,3,
        1,3,3,3,43,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,53,8,4,1,5,1,
        5,5,5,57,8,5,10,5,12,5,60,9,5,1,6,4,6,63,8,6,11,6,12,6,64,2,30,38,
        0,7,1,1,3,2,5,3,7,4,9,5,11,6,13,7,1,0,4,2,0,60,60,62,62,2,0,65,90,
        97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,75,0,1,
        1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,
        0,0,0,13,1,0,0,0,1,15,1,0,0,0,3,17,1,0,0,0,5,24,1,0,0,0,7,42,1,0,
        0,0,9,52,1,0,0,0,11,54,1,0,0,0,13,62,1,0,0,0,15,16,5,40,0,0,16,2,
        1,0,0,0,17,18,5,41,0,0,18,4,1,0,0,0,19,20,5,65,0,0,20,21,5,78,0,
        0,21,25,5,68,0,0,22,23,5,79,0,0,23,25,5,82,0,0,24,19,1,0,0,0,24,
        22,1,0,0,0,25,6,1,0,0,0,26,30,5,34,0,0,27,29,9,0,0,0,28,27,1,0,0,
        0,29,32,1,0,0,0,30,31,1,0,0,0,30,28,1,0,0,0,31,33,1,0,0,0,32,30,
        1,0,0,0,33,43,5,34,0,0,34,38,5,34,0,0,35,37,9,0,0,0,36,35,1,0,0,
        0,37,40,1,0,0,0,38,39,1,0,0,0,38,36,1,0,0,0,39,41,1,0,0,0,40,38,
        1,0,0,0,41,43,5,0,0,1,42,26,1,0,0,0,42,34,1,0,0,0,43,8,1,0,0,0,44,
        53,5,61,0,0,45,46,5,33,0,0,46,53,5,61,0,0,47,53,7,0,0,0,48,49,5,
        60,0,0,49,53,5,61,0,0,50,51,5,62,0,0,51,53,5,61,0,0,52,44,1,0,0,
        0,52,45,1,0,0,0,52,47,1,0,0,0,52,48,1,0,0,0,52,50,1,0,0,0,53,10,
        1,0,0,0,54,58,7,1,0,0,55,57,7,2,0,0,56,55,1,0,0,0,57,60,1,0,0,0,
        58,56,1,0,0,0,58,59,1,0,0,0,59,12,1,0,0,0,60,58,1,0,0,0,61,63,7,
        3,0,0,62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,
        14,1,0,0,0,8,0,24,30,38,42,52,58,64,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!ExprLexer.__ATN) {
            ExprLexer.__ATN = new antlr.ATNDeserializer().deserialize(ExprLexer._serializedATN);
        }

        return ExprLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(ExprLexer.literalNames, ExprLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return ExprLexer.vocabulary;
    }

    private static readonly decisionsToDFA = ExprLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}