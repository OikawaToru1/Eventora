export const copyToClipboard = (text)=>{
    navigator.clipboard.writeText(text)
    .then(()=>alert("copied succefully"))

}