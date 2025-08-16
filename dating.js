





function match(){
    let rollno=document.getElementById("rollno").value;
    let name=document.getElementById("name").value;
    let year=document.getElementById("year").value;
    let age=document.getElementById("age").value;
    let email=document.getElementById("email").value;
    let Gender=document.getElementsByName("Gender");
    let gender="";
    for(let i=0;i<Gender.length;i++){
        if(Gender[i].checked){
            gender=Gender[i].value;
        }
    }
    let Interests=document.getElementsByName("interests");
    let interests=[];
    for(let i=0;i<Interests.length;i++){
        if(Interests[i].checked){
            interests.push(Interests[i].value);
        }
    }
    let Hobbies=document.getElementsByName("hobbies");
    let hobbies=[];
    for(let i=0;i<Hobbies.length;i++){
        if(Hobbies[i].checked){
            hobbies.push(Hobbies[i].value); 
        }
    }
    
    let gender_match="other";
    if(gender=="Male"){
        gender_match="Female";
    }
    else if(gender=="Female"){
        gender_match="Male";

    }
    
    





    fetch("students.json")
    .then(response=>response.json())
    .then((data)=>{
        let total_matches=0;
        let matched_user="";
        let matched_interests = 0;
        let matched_hobbies= 0;

        for(user of data){
            if(user["CVR Roll Number"] != rollno){

            
    
            if(user.Gender==gender_match){

                
                    
                    for (let i = 0; i <interests.length ; i++) {
                    if (user.Interests.includes(interests[i])) {
                      
                      matched_interests++;
                      } 
                     }
        
                     
                    for (let i = 0; i <hobbies.length ; i++) {
                    if (user.Hobbies.includes(hobbies[i])) {
                        
                      matched_hobbies++;
                      } 
                     }
        
                     if(matched_hobbies+matched_interests>=total_matches){
                        total_matches=matched_hobbies+matched_interests;
                        matched_user=user["CVR Roll Number"];
                        
                     }
                
                     matched_interests=0;
                     matched_hobbies=0;      
        
        
                }
            
        }}
        
        if(rollno=="" || name=="" || year =="" || age =="" || email=="" || Gender=="" || interests.length==0 || hobbies.length==0){
            document.getElementById("none").innerHTML="Please Enter All Details";
        }
        else{
      for(user of data){
            if(user["CVR Roll Number"]==matched_user){

                document.getElementById("form").style.display="none";
                document.getElementById("back").style.display="block";
                document.getElementById("none").style.display="none";
                document.getElementById("match_details").style.display="block";



            

           
               document.getElementById("match_img").src=user.Photo;

               document.getElementById("match_details").innerHTML=user.Name+"<br><br>"+"Roll no : "+user["CVR Roll Number"]+"<br>"+"Year of Study : "+user["Year of Study"]+"<br>"+"Age : "+user["Age"]+"<br>"+"Gender : "+user["Gender"]+"<br>"+"Interests : "+user["Interests"]+"<br>"+"Hobbies : "+user["Hobbies"]+"<br>"+"Email : "+user["Email"];  

            
            }
        }

           
        }
        




    })

    }
   

   







