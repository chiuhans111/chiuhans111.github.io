// this code provide smart content analyze ability




!function () {
    let cjk = "(?<cjk>([⺀-\u2efe㇀-\u31ee㈀-㋾㌀-㏾㐀-\u4dbe一-\u9ffe豈-\ufafe︰-﹎]|[\ud840-\ud868\ud86a-\ud86c][\udc00-\udfff]|\ud869[\udc00-\udede\udf00-\udfff]|\ud86d[\udc00-\udf3e\udf40-\udfff]|\ud86e[\udc00-\udc1e]|\ud87e[\udc00-\ude1e])+)"
    let eng = "(?<eng>\w+)"
    let contentMatcher = new RegExp(cjk + '|' + eng + '|(?<other>.+)')

    class Group {
        constructor(data) {
            if (typeof data == 'string') {
                data = this.parse(data)
            }
            this.data = data
        }

        parse(text) {
            return [text]
        }

        toString() {
            return this.data.map(x => x.toString()).join('')
        }
    }


    class Sentence extends Group {
        parse(text) {
            let list = []
            text.replace(contentMatcher, function () {
                let groups = arguments[arguments.length - 1]
                console.log(groups)
            })
            return []
        }
    }

    class words extends Group {
        constructor(data) {
            if (typeof data)
        }
    }

}()