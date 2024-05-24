export const fileUpload = async(file)=>{
    if(!file) throw new Error ("File not found ");
    const cloudUrl = 'https://api.cloudinary.com/v1_1/sma-dev/upload'; //router updloaded img
    const formdata =  new FormData();   //this element provides js
                    
    //this elements represents the values to send to the server
    formdata.append('upload_preset','journalApp'); 
    formdata.append('file',file);

        //here pass element to server and send
    try {
        const result = await fetch(cloudUrl,{ 
            method:'POST',
            body:formdata 
        });
       // console.log(result);
        if(!result.ok) throw new Error('i can`t upload image'); 
        const cloudResp = await result.json();
        //console.log({cloudResp});
        return cloudResp.secure_url;
        //show message if can`t  upload image
    } catch (error) {
      //  console.error(error);
        throw new Error(error.message);
      
    }
}