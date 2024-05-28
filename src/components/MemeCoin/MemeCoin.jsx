import React from "react";

import classes from "../MemeCoin/MemeCoin.module.css";

const url = "https://s3-alpha-sig.figma.com/img/e77f/5a93/ee731ace263988b1ac0cb82e20dcc7bd?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ba79l6EyA87n4maogyR7tsADbEmwKCsmw-LbXQYm4DybKREnErmKFawwbbLZLsC8TukiWzlYTqbdk-XzwAvHveY8LtTLIXIg4Y-rXduQcjs8vRm00AL7nFXM1Es5L-fD2RmUv8awgfGu3qfsI4ZDmXxBZg7BMqyPRt62OLBWy86Sh~sfmqD0zQ92nG8CMJLP1eSG94F~XQ1FZ8aksqoJ5bIa0YyOiTZB4NjjfDkHOWikvS0oyUtQZ4LLKgqp~RrE6nbfxjk5Ae8NyVoS0k2XXFWWJME8f1vCWJISCvd~5cqoQHGF5ZRpEU0bVx~Om~dJPTxdLZWQjzLjdiAlImwPdg__"

const MemeCoin = () => {
  return (
    <div className="w-[60%] m-auto">
      <div
        className={`${classes?.bgcolor} p-6 rounded-lg flex items-center m-auto z-20 relative`}
      >
        <div className="absolute sm:-left-12 -left-20">
            <img src= {url} className="w-40"/>
        </div>
        <div className="p-6 rounded-lg w-[80%] m-auto">
          <h2 className="text-4xl font-bold mb-4 text-white text-center">What is $SNBL Coin?</h2>
          <p className="mb-4 text-white text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
        </div>
        <div className="absolute sm:-right-44 -right-44  top-12">
            <img src= {url} className="w-64"/>
        </div>
      </div>
    </div>
  );
};

export default MemeCoin;
