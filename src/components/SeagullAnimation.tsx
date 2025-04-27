const SeagullAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <svg 
        className="absolute top-20 right-20 text-primary/20 w-20 h-20 seagull" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 2S14.5 4 9 9c-1.7 1.6-2.6 3.7-3 6 0 0 1.5-1 2-1 2 0 4 1 4 3.5S9.5 21 8 21c0 0 3 0 5-2 3.2-3.2 4-8 4-8s-.5 6-5 9c0 0 5.3-2 6-9 0 0 1.8 2 3 2 1 0 2-.2 2-1s-2-1-2-1 3.2-1.2 3.7-2.8c.5-1.7-2.8-2.8-2.8-2.8S22.7 6.7 22 2z"/>
      </svg>
      <svg 
        className="absolute top-40 left-20 text-primary/10 w-16 h-16 seagull-delayed" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 2S14.5 4 9 9c-1.7 1.6-2.6 3.7-3 6 0 0 1.5-1 2-1 2 0 4 1 4 3.5S9.5 21 8 21c0 0 3 0 5-2 3.2-3.2 4-8 4-8s-.5 6-5 9c0 0 5.3-2 6-9 0 0 1.8 2 3 2 1 0 2-.2 2-1s-2-1-2-1 3.2-1.2 3.7-2.8c.5-1.7-2.8-2.8-2.8-2.8S22.7 6.7 22 2z"/>
      </svg>
      <svg 
        className="absolute bottom-40 right-40 text-primary/15 w-24 h-24 seagull" 
        viewBox="0 0 24 24" 
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 2S14.5 4 9 9c-1.7 1.6-2.6 3.7-3 6 0 0 1.5-1 2-1 2 0 4 1 4 3.5S9.5 21 8 21c0 0 3 0 5-2 3.2-3.2 4-8 4-8s-.5 6-5 9c0 0 5.3-2 6-9 0 0 1.8 2 3 2 1 0 2-.2 2-1s-2-1-2-1 3.2-1.2 3.7-2.8c.5-1.7-2.8-2.8-2.8-2.8S22.7 6.7 22 2z"/>
      </svg>
    </div>
  );
};

export default SeagullAnimation;