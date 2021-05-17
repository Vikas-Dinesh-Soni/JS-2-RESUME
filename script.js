var loadFile = function(event){
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("label").style.visibility='hidden';
    document.getElementById("file").style.visibility='hidden';
}

function addnew(){
    var chq = document.getElementById('newadd').value;
    if(chq == 2){
        document.getElementById('job3').style.display='block';
        document.getElementById('select').style.visibility='hidden';
    }
}   

function validate(){
    var count = 0;
    var fname = document.getElementById('fname').value;
    if(fname=="")
    {
        alert("Please fill the first name")
        count = count + 1;
    }
    var lname = document.getElementById('lname').value;
    if(lname=="")
    {
        alert("Please fill the Last name")
        count = count + 1;
    }
    var contact = document.getElementById('contact').value;
    if(contact=="")
    {
        alert("Please fill the Contact Number")
        count = count + 1;
    }
    var eml = document.getElementById('eml').value;
    if(eml=="")
    {
        alert("Please fill the Email")
        count = count + 1;
    }
    var aboutme = document.getElementById('aboutme').value;
    if(aboutme=="")
    {
        alert("Please fill the About me Area")
        count = count + 1;
    }
    var file = document.getElementById('file').value;
    if(file=="")
    {
        alert("Please Select the photo")
        count = count + 1;
    }

    var post = document.getElementById('post').value;
    if(post=="")
    {
        alert("Please fill the post in job session")
        count = count + 1;
    }

    var company = document.getElementById('company').value;
    if(company=="")
    {
        alert("Please fill the name of company")
        count = count + 1;
    }
    
    var place = document.getElementById('place').value;
    if(place=="")
    {
        alert("Please fill the name of place")
        count = count + 1;
    }

    var jobdes = document.getElementById('jobdes').value;
    if(jobdes=="")
    {
        alert("Please fill the Job Description")
        count = count + 1;
    }


    var post2 = document.getElementById('post2').value;
    if(post2=="")
    {
        alert("Please fill the post 2 in job session")
        count = count + 1;
    }

    var company2 = document.getElementById('company2').value;
    if(company2=="")
    {
        alert("Please fill the name of company 2")
        count = count + 1;
    }
    
    var place2 = document.getElementById('place2').value;
    if(place2=="")
    {
        alert("Please fill the name of place 2")
        count = count + 1;
    }

    var jobdes2 = document.getElementById('jobdes2').value;
    if(jobdes2=="")
    {
        alert("Please fill the Job Description 2")
        count = count + 1;
    }

    var vrta = document.getElementById('vrta').value;
    if(vrta=="")
    {
        alert("Please fill the Higlight Qualities")
        count = count + 1;
    }
    
    var edutr = document.getElementById('edutr').value;
    if(edutr=="")
    {
        alert("Please fill the Education Deatils")
        count = count + 1;
    }
    
    var hbr = document.getElementById('hbr').value;
    if(hbr=="")
    {
        alert("Please fill the Hobbies Session")
        count = count + 1;
    }

    switch(count){
        case 0:
            document.getElementById('but').style.visibility="visible";
            document.getElementById('validate').style.visibility="hidden";
    }
}