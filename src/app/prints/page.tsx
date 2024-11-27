function PrintsPage() {
  return (
    <div className='max-w-3xl mx-auto'>
      <h2 className='text-2xl text-center uppercase dark:text-glow-yellow mt-3 mb-5'>
        Where to buy prints
      </h2>
      <p className='text-center'>
        If you&apos;d like to support my work, prints of a selection of my photos can
        be purchased at{" "}
        <a
          href='https://mattjballard.darkroom.com'
          className='drop-shadow-md underline dark:text-glow dark:hover:text-glow-yellow'>
          my Darkroom page
        </a>{" "}
        here:
      </p>
      <div className='flex justify-center my-6 backdrop-blur-sm'>
        <a href='https://mattjballard.darkroom.com/'>
          <svg
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='h-20 w-20 p-3 rounded-lg shadow-md hover:scale-110 hover-glow-link border border-background'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.993221 14.7078C0.700328 14.4149 0.700327 13.94 0.993221 13.6471L13.94 0.70031C14.2329 0.407417 14.7078 0.407417 15.0007 0.70031C15.2936 0.993204 15.2936 1.46808 15.0007 1.76097L2.05388 14.7078C1.76099 15.0007 1.28611 15.0007 0.993221 14.7078Z'
              fill='black'></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0.764705 8.38397C0.471812 8.09107 0.471812 7.6162 0.764705 7.32331L7.24652 0.841497C7.53941 0.548604 8.01428 0.548604 8.30718 0.841497C8.60007 1.13439 8.60007 1.60926 8.30718 1.90216L1.82537 8.38397C1.53247 8.67686 1.0576 8.67686 0.764705 8.38397Z'
              fill='black'></path>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M7.31695 14.9363C7.02406 14.6434 7.02406 14.1686 7.31695 13.8757L13.7988 7.39386C14.0917 7.10097 14.5665 7.10097 14.8594 7.39386C15.1523 7.68675 15.1523 8.16163 14.8594 8.45452L8.37761 14.9363C8.08472 15.2292 7.60984 15.2292 7.31695 14.9363Z'
              fill='black'></path>
          </svg>
        </a>
      </div>
      <p className='text-center'>
        If you see an image on this site that is not available for print that
        you&apos;d like to order, feel free to reach out on social media and I may be
        able to make it so.
      </p>
    </div>
  );
}
export default PrintsPage;