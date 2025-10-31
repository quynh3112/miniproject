import { useEffect, useState } from "react";
export default function useCountDown(tg:number){
    const [minutes,setMinutes]=useState<number>(tg)
    const [second,setSecond]=useState<number>(0)
 

  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        setSecond((prevSecond) => {
          if (prevMinutes === 0 && prevSecond === 0) {
            clearInterval(interval);
            return 0;
          }

          if (prevSecond === 0) {
            return 59;
          } else {
            return prevSecond - 1;
          }
        });

        if (second === 0) {
          return prevMinutes > 0 ? prevMinutes - 1 : 0;
        } else {
          return prevMinutes;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [second]);




   return {minutes,second}


}

