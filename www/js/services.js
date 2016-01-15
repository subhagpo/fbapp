angular.module('starter.services', [])

.factory('Questions', function()
{
    var questions = [
        {
            id:0,
            $value: "Rate workshop",
            Rating: null
        },
        {
            id:1,
            $value: "Rate conference",
            Rating: 8
        },
        {
            id:2,
            $value: "Rate overall experience",
            Rating: 6
        }
    ];
    
    return {
        all : function() {
            return questions;
        }
    }
})
 

