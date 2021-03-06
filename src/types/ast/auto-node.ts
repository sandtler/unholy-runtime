/**
 * AutoNode convenience type.
 * @packageDocumentation
 *
 * @license
 * Copyright (c) 2020 Felix Kopp <sandtler@sandtler.club>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS
 * BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import type { SyntaxKind, TypeKeywordSyntaxKind } from "../syntax";
import type { TypeNode } from "./type";
import type {
    BlockStatement,
    EmptyStatement,
    ExpressionStatement,
    FuncDeclarationStatement,
    VarDeclarationStatement,
    IfStatement,
    ReturnStatement,
} from "./statement";
import type {
    BinaryExpression,
    CallExpression,
    VarDeclaration,
    FuncDeclaration,
    ParameterDeclaration,
    IntegerLiteral,
    BoolLiteral,
} from "./expression";
import type { Identifier, Node, SourceFile } from "./node";

/**
 * Automatically determine the kind of node based on the SyntaxKind.
 *
 * @typeParam T The kind of node.
 */
type AutoNode<T extends SyntaxKind> =
    T extends TypeKeywordSyntaxKind ? TypeNode :
    T extends SyntaxKind.BlockStatement ? BlockStatement :
    T extends SyntaxKind.EmptyStatement ? EmptyStatement :
    T extends SyntaxKind.ExpressionStatement ? ExpressionStatement :
    T extends SyntaxKind.FuncDeclarationStatement ? FuncDeclarationStatement :
    T extends SyntaxKind.VarDeclarationStatement ? VarDeclarationStatement :
    T extends SyntaxKind.IfStatement ? IfStatement :
    T extends SyntaxKind.ReturnStatement ? ReturnStatement :
    T extends SyntaxKind.BinaryExpression ? BinaryExpression :
    T extends SyntaxKind.CallExpression ? CallExpression :
    T extends SyntaxKind.VarDeclaration ? VarDeclaration :
    T extends SyntaxKind.FuncDeclaration ? FuncDeclaration :
    T extends SyntaxKind.ParameterDeclaration ? ParameterDeclaration :
    T extends SyntaxKind.Identifier ? Identifier :
    T extends SyntaxKind.TrueKeyword ? BoolLiteral :
    T extends SyntaxKind.FalseKeyword ? BoolLiteral :
    T extends SyntaxKind.IntegerLiteral ? IntegerLiteral :
    T extends SyntaxKind.SourceFile ? SourceFile :
    Node;

export default AutoNode;
