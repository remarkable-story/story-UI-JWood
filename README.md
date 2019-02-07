# story-UI-JWood

~Index.html
    Notable features: 
        -Script sourced from Green Sock to allow Tweens
        -Link sourced from googleFonts allowing for:
                --pt serif
                --work sans
        -Curtain containers: animated in @media: desktop
        -Deck container: all cards labeled with data-btn, numeric
        -Map Feature: created in Tableau


~index.less
    Notable features:
        -Most major elements have @media markers for:
                --mobile
                --tablet
                --desktop (if tablet features did not carry through)
                !-This page was designed MOBILE-FIRST


~bountiful.js
    Notable features:
        -Cards constructor 'click' feature is present to be linked with
            other functions (no real effect, presently)
        -Country spinDoctor function is just a surprise effect to
            generate interest and amusement
        -Curtains Operator governs the entrance and exit of the curtains,
            based on the property window.innerWidth
        -Map javascript provided by Lydia Thornton


~Overall
    The curtains are designed to focus the page contents when the screen
    width is larger than the contents. All card and navigation buttons are
    responsive, and are easily reproduced components.