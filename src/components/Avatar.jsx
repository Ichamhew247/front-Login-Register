function Avatar({ src, className = "h-10 w-10 rounded-full" }) {
  return (
    <div>
      <img src={src} alt="user" className={className} />
    </div>
  );
}

export default Avatar;
