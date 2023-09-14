import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between py-5 items-center border-b-2 mx-8 my-2'>
           <h1 className="text-4xl font-semibold">Knowledge Cafe</h1> 
           <img src={profile} alt="img" />
        </div>
    );
};

export default Header;