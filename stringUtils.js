            var stringUtils = (function() {
                var chars = ['@','#','H','$',
                             'A','*','x','z',
                             'o','+','=','-', 
                             ':',',','.',' ']


                var getString = function(data, width, height) {
                    var next = 0
                    var string = ''

                    // data[0] = red
                    // data[1] = green
                    // data[2] = blue
                    // data[3] = alpha

                    for (var row = 0; row < height; row++) {

                        if (row % 5 != 0) {
                            next += 4 * width
                            continue
                        }

                        var line = ''

                        for (var col = 0; col < width; col++) {
                            if (col % 2 == 0) {
                                var color = data[next] + data[next + 1] + data[next + 2]
                                color = color / 3
                                line = chars[parseInt(color / 16)] + line
                            }
                            next = next + 4
                        }
                        string = string + line + '\n'
                    }
                    return string
                }


                var getStringThatShowsMovement = function(prevString, newString) {
                    var string = ''
                    for (var i=0; i < newString.length; i++) {
                        if (newString.charAt(i) == '\n') {
                            string = string + '\n'
                        } else if (Math.abs(getIndex(newString.charAt(i)) - getIndex(prevString.charAt(i))) < 4) { // I like four.
                            string = string + ' '
                        } else {
                            string = string + '@'
                        }
                    }
                    return string
                }


                var distanceBetween = function(a, b) {
                    return 
                }

                var getIndex = function(char) {
                    for (var i = 0; i < chars.length; ++i) {
                        if (chars[i] == char) { return i }
                    }
                    return 100
                }

                return {
                    getString: getString,
                    getStringThatShowsMovement: getStringThatShowsMovement
                }
            })()