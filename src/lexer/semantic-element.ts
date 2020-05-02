/**
 * Implementation of {@linkcode ISemanticElement}.
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

import type ISemanticElement from "../types/semantic-element";
import { SyntaxKind } from "../types/syntax";
import { tokenToString } from "./token-maps";
import { AssertionError } from "assert";

export default class SemanticElement<T extends SyntaxKind> implements ISemanticElement<T> {

    public readonly kind: T;
    public readonly line: number;
    public readonly column: number;
    public readonly length: number;

    public readonly rawText: string;
    public value?: string;

    public constructor(kind: T, line: number, column: number, rawText?: string) {
        if (rawText === undefined) {
            rawText = tokenToString(kind);
            if (rawText === undefined) {
                throw new AssertionError({
                    message: "Could not obtain token text",
                });
            }
        }

        this.kind = kind;
        this.line = line;
        this.column = column;
        this.rawText = rawText;
        this.length = rawText.length;
    }

    public isReservedWord(): boolean {
        return this.kind > SyntaxKind.KEYWORD_START && this.kind < SyntaxKind.KEYWORD_END;
    }

}
