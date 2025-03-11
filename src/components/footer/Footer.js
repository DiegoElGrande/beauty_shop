import './footer.scss'

export default function Footer() {
    const linkList = ['instagram', 'facebook', 'twitter', 'pinterest', 'telegram']
    return (
        <footer>
            <div className="container column">
                <div className="icons">
                    {linkList.map(( x ) => <img src={`/image/icons/${x}.svg`} height={30} alt={`${x}`} /> )}
                </div>
                <div class="footer_content">
                    <div className="contact">
                        <h2>Bloom Beauty</h2>
                        <span>Discover nature's beauty with our natural care products.</span>
                        <a href="#">+7 999 123 45 67</a>
                        <a href="#">beautybloom@mail.ru</a>
                        <a href="#">Planet Earth</a>
                    </div>
                    <div className="help">
                        <p>Help</p>
                        <a href="#">Contact us</a>
                        <a href="#">FAQ</a>
                        <a href="#">Shoppping returns</a>
                    </div>
                    <div className="account">
                        <p>my account</p>
                        <a href="#">Addresses</a>
                        <a href="#">Orders status</a>
                        <a href="#">Wishlist</a>
                    </div>
                    <div className="custom_care">
                        <p>Custom care</p>
                        <a href="#">About us</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="sign_up">
                        <p>sign up for emails</p>
                        <span>Stay informed, subscribe to our newsletter now!</span>
                        <input type="text" placeholder='Email' />
                        <a href="#">Subscribe</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="license">
                <p>© 2023 Bloom Beauty.</p>
                <div className="detail">
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    )
}