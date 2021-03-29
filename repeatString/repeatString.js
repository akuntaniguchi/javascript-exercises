const repeatString = function(string, repeat_number) {
    result = ""

    if(repeat_number < 0) {
        return "ERROR"
    }
    
    for(let i = 0; i < repeat_number; i++) {
        result += string
    }

    return result
}

module.exports = repeatString
