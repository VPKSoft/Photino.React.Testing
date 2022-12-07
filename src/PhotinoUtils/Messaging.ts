/*
MIT License

Copyright (c) 2022 Petteri Kautonen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// Copyright (c) 2011 rubicon IT GmbH
import * as React from "react";

type ExternalWrapper = {
    receiveMessage?: (callBack: (message: string) => void) => void;
    sendMessage?: (message: string) => void;
} & External;

/**
 * A custom hook to communicate with the Photino backend.
 * @param onMessageReceived A call back to run when a message is received.
 * @returns A function to send a message to the Photino backend.
 */
const useMessage = <T>(onMessageReceived: (message: T) => void): [sendMessage: (message: T) => void] => {
    (window.external as ExternalWrapper)?.receiveMessage?.((m: string) => {
        let value: T = JSON.parse(m);

        if (typeof value === "string") {
            value = value.replace(/(^"|"$)/g, "") as T;
        }
        onMessageReceived(value);
    });

    const sendMessage = React.useCallback((m: T) => {
        console.log(m);

        (window.external as ExternalWrapper)?.sendMessage?.(JSON.stringify(m));
    }, []);

    return [sendMessage];
};

export default useMessage;
