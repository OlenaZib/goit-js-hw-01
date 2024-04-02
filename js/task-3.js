 function getElementWidth(content, padding, border) {
   const contentwidth = parseFloat(content);
    const paddingwidth = parseFloat(padding);
   const borderwidth = parseFloat(border);
   return contentwidth+paddingwidth*2+borderwidth*2;
 }
 
