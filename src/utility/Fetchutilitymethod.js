export async function FetchUtilityMethod(host, port, path) 
{

    const res = await fetch(host + port + path);
    const json = await res.json();
    return json;
  }
   export default FetchUtilityMethod;










