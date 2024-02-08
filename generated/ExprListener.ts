// Generated from /Users/alialiev/Desktop/antrl-test/antlr-c3/src/grammar/Expr.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { SeaQlContext } from "./ExprParser.js";
import { ExpressionContext } from "./ExprParser.js";
import { FieldConstraintContext } from "./ExprParser.js";
import { FieldContext } from "./ExprParser.js";
import { ValueContext } from "./ExprParser.js";
import { Logical_operatorContext } from "./ExprParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ExprParser`.
 */
export class ExprListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `ExprParser.seaQl`.
     * @param ctx the parse tree
     */
    enterSeaQl?: (ctx: SeaQlContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.seaQl`.
     * @param ctx the parse tree
     */
    exitSeaQl?: (ctx: SeaQlContext) => void;
    /**
     * Enter a parse tree produced by `ExprParser.expression`.
     * @param ctx the parse tree
     */
    enterExpression?: (ctx: ExpressionContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.expression`.
     * @param ctx the parse tree
     */
    exitExpression?: (ctx: ExpressionContext) => void;
    /**
     * Enter a parse tree produced by `ExprParser.fieldConstraint`.
     * @param ctx the parse tree
     */
    enterFieldConstraint?: (ctx: FieldConstraintContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.fieldConstraint`.
     * @param ctx the parse tree
     */
    exitFieldConstraint?: (ctx: FieldConstraintContext) => void;
    /**
     * Enter a parse tree produced by `ExprParser.field`.
     * @param ctx the parse tree
     */
    enterField?: (ctx: FieldContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.field`.
     * @param ctx the parse tree
     */
    exitField?: (ctx: FieldContext) => void;
    /**
     * Enter a parse tree produced by `ExprParser.value`.
     * @param ctx the parse tree
     */
    enterValue?: (ctx: ValueContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.value`.
     * @param ctx the parse tree
     */
    exitValue?: (ctx: ValueContext) => void;
    /**
     * Enter a parse tree produced by `ExprParser.logical_operator`.
     * @param ctx the parse tree
     */
    enterLogical_operator?: (ctx: Logical_operatorContext) => void;
    /**
     * Exit a parse tree produced by `ExprParser.logical_operator`.
     * @param ctx the parse tree
     */
    exitLogical_operator?: (ctx: Logical_operatorContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

