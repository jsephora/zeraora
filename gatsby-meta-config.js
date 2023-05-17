/**
 * @typedef {Object} Links
 * @prop {string} github Your github repository
 */

/**
 * @typedef {Object} MetaConfig
 * @prop {string} title Your website title
 * @prop {string} description Your website description
 * @prop {string} author Maybe your name
 * @prop {string} siteUrl Your website URL
 * @prop {string} lang Your website Language
 * @prop {string} utterances Github repository to store comments
 * @prop {Links} links
 * @prop {string} favicon Favicon Path
 */

/** @type {MetaConfig} */
const metaConfig = {
  title: "Zeraora",
  description: `Joey's Website and Blog`,
  author: "Joey Sephora",
  siteUrl: "https://zeraora.gatsbyjs.io/",
  lang: "en",
  utterances: "jsephora/zeraora-comments",
  links: {
    github: "https://github.com/jsephora/zeraora",
  },
  favicon: "src/images/icon.png",
}

// eslint-disable-next-line no-undef
module.exports = metaConfig
