import React, { useEffect } from 'react';

const Typeform = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        data-tf-widget="rLqtxZLt"
        data-tf-opacity="100"
        data-tf-inline-on-mobile
        data-tf-iframe-props="title=Guru do Inglês"
        data-tf-transitive-search-params
        data-tf-auto-focus
        data-tf-medium="snippet"
        data-tf-full-screen
      />
    </div>
  );
};

export default Typeform;
