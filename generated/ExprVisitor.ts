// Generated from /Users/alialiev/Desktop/antrl-test/antlr-c3/src/grammar/Expr.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SeaQlContext } from "./ExprParser.js";
import { ExpressionContext } from "./ExprParser.js";
import { FieldConstraintContext } from "./ExprParser.js";
import { FieldContext } from "./ExprParser.js";
import { ValueContext } from "./ExprParser.js";
import { Logical_operatorContext } from "./ExprParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ExprParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class ExprVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `ExprParser.seaQl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSeaQl?: (ctx: SeaQlContext) => Result;
    /**
     * Visit a parse tree produced by `ExprParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression?: (ctx: ExpressionContext) => Result;
    /**
     * Visit a parse tree produced by `ExprParser.fieldConstraint`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldConstraint?: (ctx: FieldConstraintContext) => Result;
    /**
     * Visit a parse tree produced by `ExprParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `ExprParser.value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitValue?: (ctx: ValueContext) => Result;
    /**
     * Visit a parse tree produced by `ExprParser.logical_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogical_operator?: (ctx: Logical_operatorContext) => Result;
}

