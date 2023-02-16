import React from 'react'

export function prepareContent(textContent) {

    const text = textContent.split(" ");
    text.splice(0, 1);
    return (text.join(' '))
  
}
