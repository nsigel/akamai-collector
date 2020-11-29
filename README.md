# Browser Data Collector

Browser data collection made easy\
Deploy in minutes (possibly seconds!)\
\
The collected data can be used for battling anti-bots such as Akamai, PX, and much more!

## Installation

### Heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/fourwadu/hayai-akamai-collector/blob/main)


* Create a free database at [MongoDB](https://www.mongodb.com/)
* Click the [Deploy to Heroku](https://heroku.com/deploy?template=https://github.com/fourwadu/hayai-akamai-collector/blob/main) button above
* Enter your newly created MongoDB's URI as prompted
* Create your app and enjoy :)

### Manual
#### Requires Node.js (See [https://nodejs.org/en/download/](https://nodejs.org/en/download/))
* Clone the repository: `git clone https://github.com/fourwadu/hayai-akamai-collector`
* Create a free database at [MongoDB](https://www.mongodb.com/)
* Open the example.env file
* Replace `your_mongo_uri` with your newly created MongoDB's URI
* Replace the PORT if needed (80 for default HTTP)
* Rename the file to `.env`
* Install dependencies: `npm i`
* Start it: `npm start`

## Credits
 
Collector Source - [Charlie](https://github.com/CharlieAIO/akamai-collector) ([@0charlie01](https://twitter.com/0charlie01))\
Front-end, API - [wadu](https://github.com/fourwadu) ([@fourwadu](https://github.com/fourwadu))\
Hosting, modifications to script - [sauce](https://github.com/saucesteals) ([@saucesteals](https://twitter.com/saucesteals))

## Contributing
 
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
 
MIT License

Copyright (c) 2020 hayai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
