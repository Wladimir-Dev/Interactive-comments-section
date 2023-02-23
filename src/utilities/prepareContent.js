import React from 'react'

export function prepareContent(textContent) {

    const text = textContent.split(" ");
    const str1 = text[0];

    if (str1.startsWith("@")) {
        text.splice(0, 1);
    }
    
    return (text.join(' '))

}
