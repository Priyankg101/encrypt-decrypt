import React from 'react'

const Encoding = () => {
    return (
        <div>
            <p>The Encoder takes a value of say 'Geeks' at M=2 and returns 'Ges_ek'. I've written the algorithm for encoder to fill the matrix in a diagonal(top-left to bottom-right) and then read the matrix row-wise. So first the number of columns is decided by dividing length of string by number of rows (ceiling). And then in a while loop the string is taken index by index and each character is added to the matrix diagonal. At the end all the matrix elements are printed.</p>
        </div>
    )
}

export default Encoding
