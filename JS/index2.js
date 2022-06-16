function fname_val(){
    let fname = $('#fname').val();
    let pattern = "[a-zA-Z]{2,30}$";
    if(!fname.match(pattern)){
        let text;
        text = 'Name must only contain alphabets and its length should be between 2 and 30';
        $('#OP1').text(text);
    }
}

function lname_val(){
    let lname = $('#lname').val();

    let pattern = "[a-zA-Z]{2,30}$";
    if(!lname.match(pattern)){
        let text;
        text = 'Name must only contain alphabets and its length should be between 2 and 30';
        $('#OP2').text(text);
    }
}

function add_val(){
    let address = $('#staddress').val();

    let pattern = "[a-zA-Z0-9]{3,600}$";
    if(!address.match(pattern)){
        let text;
        text = 'Invalid Address'
        $('#OP3').text(text);
    }
}

function add2_val(){
    let address = $('#staddress2').val();

    let pattern = "[a-zA-Z0-9]{3,600}$";
    if(!address.match(pattern)){
        let text;
        // text = 'Name must only contain alphabets and its length should be between 2 and 30'
        text = 'Invalid Address'
        $('#OPa').text(text);
    }
}

function city_val(){
    let city = $('#city').val();

    let pattern = "[a-zA-Z]{3,30}$";
    if(!city.match(pattern)){
        let text;
        text = 'City name is invalid'
        $('#OP4').text(text);
    }
}

function state_val(){
    let state = $('#state').val();

    let pattern = "[a-zA-Z]{3,30}$";
    if(!state.match(pattern)){
        let text;
        text = 'State name is invalid'
        $('#OP5').text(text);
    }
}

function zip_val(){
    let zipcode = $('#zipcode').val();

    let pattern = "^[0-9]{6}$";
    if(!zipcode.match(pattern)){
        let text;
        text = "Zipcode must of length 6 and must be numbers";
        $('#OP6').text(text);
    }
}

function phone_val(){
    let phone = $('#phone').val();

    let pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
    if(!phone.match(pattern)){
        let text;
        text = "Enter number with given pattern only";
        $('#OP7').text(text);
    }
}

function email_val(){
    let email = $('#email').val();

    let pattern = "/(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
    if(!email.match(pattern)){
        let text;
        text = "Invalid email must use valid email address";
        $('#OP8').text(text);
    }
}

function sugg_val(){
    let suggest = $('#suggest').val();
    // console.log("suggest is :" ,suggest, "length is :",suggest.length);

    if(suggest.length < 3){
        let text;
        text = "Plase write suggestion using atleast 3 letters";
        $('#OP10').text(text);
    }
}

function feedback_val(){
    let feedback = $('#feedback').val();

    if(feedback.length < 3){
        let text;
        text = "Plase write feedback using atleast 3 letters";
        $('#OP9').text(text);
    }
}

$(document).ready(function(){
    $('#fname').blur(function(){
        fname_val();
    });


    $('#lname').blur(function(){
        lname_val();   
    });


    $('#staddress').blur(function(){
        add_val();   
    });

    $('#staddress2').blur(function(){
        add2_val();
        
    });

    $('#city').blur(function(){
        city_val();
    });

    $('#state').blur(function(){
        state_val();
    });

    $('#zipcode').blur(function(){
        zip_val();
    });

    $('#phone').blur(function(){
        phone_val();
    });

    $('#email').blur(function(){
        email_val();
    });

    $('#suggest').blur(function(){
        sugg_val();
    });

    $('#feedback').blur(function(){
        feedback_val();
    }); 

    $('#Submit').click(function(event){
        event.preventDefault();

        let gender = $('input[name="gender"]');
        let checked = false;
       
        for(let i=0; i<gender.length;i++){
            if(gender[i].checked){
                checked = true;
            }
            // console.log(gender[i]);
        }
        // console.log(checked);
        if(!checked){
            // console.log("Hello");
            $('#OPr').text("You have to chedk atleast one value")
        }

        fname_val();
        lname_val();
        add_val();
        add2_val();
        city_val();
        state_val();
        zip_val();
        phone_val();
        email_val();
        sugg_val();
        feedback_val();
    });

    $('#myForm').submit(function(event) {
        event.preventDefault();
        var $inputs = $('#myForm :input');
        // console.log($inputs);
        var values = {};
        $inputs.each(function() {
          values[this.name] = $(this).val();
        });
        $('#displayArea').
        append(
            "<tr><td>" + values.fname  + " " + values.lname +
            "</td><td>" + values.staddress  + " " + values.staddress2 +
            "</td><td>" + values.city +
            "</td><td>" + values.state +
            "</td><td>" + values.zipcode +
            "</td><td>" + values.phone +
            "</td><td>" + values.email + 
            "</td><td>" + values.feedback + 
            "</td><td>" + values.suggest +
            "</td><td>" + values.gender + 
            "</td></tr>")
        // $("input[type=text], textarea").val("");
      });

  });