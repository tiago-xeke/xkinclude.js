async function include(path){
    const isLocalContext = window.location.protocol === "file:";
  
    try{
        if(isLocalContext){
            console.warn(`"import" not supported for "${path}" in local context. Using old method`);

            const script = document.createElement("script");
            script.src = path;
            document.head.appendChild(script);
        }else{
          await import(`./${path}`);
        }
    }catch(error){
        console.error(`Error to import "${path}":`,error);
    }
}