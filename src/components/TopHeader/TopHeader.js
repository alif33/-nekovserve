
const TopHeader = () => {
    return (
        <>
            <section className="mb-5 overflow-hidden top-section">
                <div>
                    <div className="wrapper d-flex justify-content-center position-relative">
                        <div className="container pt-5 pt-sm-0" style={{ position: 'absolute' }}>
                        </div>
                        <img className="circle-spin" src="/images/topSection/big_circle.png" alt="..."/>
                        <img className="circle-spin-r" src="/images/topSection/small_circle.png" alt="..."/>
                        <img className="img-main" src="/images/topSection/big_group_1.png" alt="..."/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TopHeader;