const Handlebars = require("handlebars");
const fs = require("fs");
const pdf = require("html-pdf");
const { join } = require("path");

class GeneratePdf {

  static generateHTML(path, data) {
    const template = Handlebars.compile(String(fs.readFileSync(path, "utf-8")));

    return template(data);
  }

  static toPdfFile(file, data) {
    const html = this.generateHTML(`resources/${file}`, data);

    return new Promise((resolve, reject) => {
      return pdf
        .create(html, {
          type: 'pdf',
          directory: 'generated-pdf',
          format: 'A4',
        })
        .toFile(
          join("./generated-pdf", `Cover Letter-${data.strong_name}.pdf`), 
          (error, res) => {
            if (error) reject(error)
            resolve(res)
          });
    })
  }

}

module.exports = GeneratePdf;
