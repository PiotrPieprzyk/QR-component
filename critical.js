const fonts = [
    new FontFace("Outfit", "url(./assets/Outfit-Bold.woff2)", {style: 'normal', weight: '700'}), 
    new FontFace("Outfit", "url(./assets/Outfit-Regular.woff2)", {style: 'normal', weight: '400'})
];

Promise.all(fonts.map(font => font.load())).then(() => {
    fonts.forEach((font) => {
        document.fonts.add(font);
    });
    console.log('styles loaded!')
    document.body.style.visibility = 'visible';
})



