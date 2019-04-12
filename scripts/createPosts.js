const faker = require('faker')
const fs = require('fs-extra')
const path = require('path')
require('date-format-lite')


createFiles()

function getRandomDate () {
    const last90Days = 1000 * 60 * 60 * 24 * 90
    const randomDay= Math.floor(last90Days * Math.random())
    const randomDate = new Date(new Date() - randomDay)
    return randomDate.format('DD-MM-YYYY')
}



function createFiles(n= 20) {
    let i = 1
    while (i < n + 1) {
        fs.outputFileSync(path.resolve(`content/post-${i}.md`),createPost())
        i+=1
    }
    
}

function getRandomTags() {
    const tags = ['Sports', 'Science', 'Society', 'Games','Tech', 'Web development']
    let randomTags = []
    const randomTagsNumber = 3
    const randomizeTags = () => Math.floor(Math.random() * tags.length)
    for (let index = 0; ; index++) {
        const randomTagIndex = randomizeTags()
        if (randomTags.includes(tags[randomTagIndex])) continue
        randomTags.push(tags[randomTagIndex])
        if (randomTags.length === 3) break
    }
    return `[${randomTags[0]}, ${randomTags[1]}, ${randomTags[2]}]`
}

function createPost() {
    const frontMatter = `---
  date: ${getRandomDate()}
  excerpt: ${faker.lorem.sentence(undefined,6)}
  author: ${faker.name.firstName()} ${faker.name.lastName()}
  slug: ${faker.lorem.slug()}
  avatar: ${faker.internet.avatar()}
  tags: ${getRandomTags()}
---`
    
    const makeParagraphs = () => {
      const paragrphs = `${faker.lorem.paragraphs( 1 + Math.floor(Math.random() * 6),'\n\n')}`
      return paragrphs
    }
    const makeImage = () => {
    const image = `\n\n<div class="img-wrapper"><img src=${faker.image.image()} /></div>\n`
    return image
        
    }
    const makeHeaders = () => {
        const headings = ['# ', '## ', '### ']
        return '\n' + headings[Math.floor(Math.random() * headings.length)] + faker.lorem.sentence(undefined,9) + '\n'
    }
    return frontMatter + makeHeaders() + makeParagraphs() + makeImage() + makeHeaders() + makeParagraphs()
  }