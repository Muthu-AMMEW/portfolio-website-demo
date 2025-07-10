
export default function Contact() {
    return (<>
        {/* <!-- contact section starts --> */}
        <section class="contact p-3" id="contact">

            <h2 class="heading"><i class="fas fa-headset"></i> Get in <span>Touch</span></h2>

            <div class="container d-flex flex-wrap justify-content-around">
                <div class="image-box">
                    <img draggable="false" src="./assets/images/contact1.png" alt="" />
                </div>

                <form id="contact-form" class="d-flex flex-column mt-4">
                    <div class="input-group mt-3">
                        <input type="text" class="form-control ps-5" name="name" placeholder="Name" required />
                        <i class='fas fa-user'></i>
                    </div>
                    <div class="input-group mt-3">
                        <input type="email" class="form-control ps-5" name="email" placeholder="Email" required />
                        <i class='fas fa-envelope'></i>
                    </div>
                    <div class="input-group mt-3">
                        <input type="number" class="form-control ps-5" name="phone" placeholder="Whatsapp No." minlength="10"
                            required />
                        <i class='fas fa-phone-alt'></i>
                    </div>
                    <div class="input-group mt-3">
                        <textarea class="form-control ps-5" placeholder="Message" name="message" required></textarea>
                        <i class="fas fa-comment-dots"></i>
                    </div>
                    <div class="button-area d-flex justify-content-center my-4">
                        <button class="btn btn-primary" type="submit">
                            Submit <i class="fa fa-paper-plane"></i></button>
                    </div>
                </form>
            </div>
        </section>
        {/* <!-- contact section ends --> */}
    </>
    )
}