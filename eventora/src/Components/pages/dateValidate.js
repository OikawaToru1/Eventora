export const isExpired = (postDate)=>{
    const [postYear, postMonth, postDay] = postDate.split("-").map(Number);

    const now = new Date();

    const todayYear = now.getFullYear();
    const todayMonth = now.getMonth()+1;
    const todayDay = now.getDay();

    return (
        todayYear > postYear|| 
        (todayYear === postYear && (todayMonth) > postMonth) || 
        (todayYear === postYear && (todayMonth) === postMonth && todayDay > postDay)
      
    );
}