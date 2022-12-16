var ptx_lunr_search_style = "default";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  my-website.org  http:\/\/pretextbook.org   copyright  "
},
{
  "id": "dedication-1",
  "level": "1",
  "url": "dedication-1.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " For ...  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " I would like to thank...  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   About this book:  "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Securing a Snap! Account",
  "body": "Securing a Snap! Account "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Snap! Workspace",
  "body": "The Snap! Workspace "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "1.3",
  "title": "Snap! Menus",
  "body": "Snap! Menus "
},
{
  "id": "demo",
  "level": "1",
  "url": "demo.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Code Block Palette",
  "body": " The Code Block Palette  Scripts are created in Snap! by snapping blocks of code together (such as the Move 10 Steps code block in the illustration). The types of code blocks available are displayed in a Code Block Palette at the top left-hand side of the screen. For example, the Motion code blocks are currently highlighted in the palette below. Other categories of code blocks include Looks, Sound, Pen, Control, Sensing, Operators, and Variables. Each category is a different color (e.g.. Motion code blocks are blue). Click on the different categories (Motion, Looks, etc.) to access the code blocks associated with that category.   The Snap! code block.   This should be better written for accessibility...    The Motion code blocks direct the movement of sprites (actors that can move about the stage on the right-hand side of the screen.) The Looks code blocks control the appearance of sprites. The Sound code blocks are used to play sounds. The Pen code blocks control the color and thickness of the turtle’s pen. The Control code blocks provide control structures such as the Repeat command. The Sensing code blocks are used to sense the status of Snap! objects and monitor external inputs such as the keyboard and the microphone. The Operators code blocks provide mathematical and logical functions. The Variables palette is used to create and modify variables.   The Code Block Pallete  Click on each of the categories in the Code Block Palette to get a sense of the types of commands that are found under each category.    Interactive Snap applet    "
},
{
  "id": "solutions-1",
  "level": "1",
  "url": "solutions-1.html",
  "type": "Appendix",
  "number": "A",
  "title": "Selected Hints",
  "body": " Selected Hints  "
},
{
  "id": "solutions-2",
  "level": "1",
  "url": "solutions-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Selected Solutions",
  "body": " Selected Solutions  "
},
{
  "id": "appendix-1",
  "level": "1",
  "url": "appendix-1.html",
  "type": "Appendix",
  "number": "C",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
