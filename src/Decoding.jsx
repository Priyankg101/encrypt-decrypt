import React from 'react'

const Decoding = () => {
    return (
        <div>
            <p>
            The Decoder takes a value of say 'GSRE___E__K___EFGS___KOE' and returns 'GEEKS FOR GEEKS'. The algorithm takes an encoded string and decodes it by reading its characters in a specific pattern. It first replaces any underscore characters with spaces, then reads the characters from the encoded string in a pattern that starts at the first character and moves diagonally from top-left to bottom-right, and concatenates them to form the decoded string.
            </p>
        </div>
    )
}

export default Decoding
