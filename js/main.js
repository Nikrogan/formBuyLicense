document.addEventListener( 'DOMContentLoaded', ready );

function ready() {
    // default DOM
    const $amount          = document.querySelector( '.license__type--list' );
    const $licenseTypeList = document.querySelectorAll( '.license__type' );
    const $total           = document.querySelector( '.license__buy-inner > .license__buy-accent' );
    const $currentPlan     = document.querySelector( '.license__buy-text-primary' );

    // default values
    let type             = {
        price: 0,
        id: 0
    };
    let amount           = $amount.value;

    // make listeners
    $amount.addEventListener( 'change', function() {
        amount = this.value;
        update( type, amount );
    });

    $licenseTypeList.forEach( item => {
        item.addEventListener( 'change', () => {
            updateType.call( item );
            update();
        } );
    })


    function update() {
        $total.innerHTML       = `$${ type.price * amount }us`;
        $currentPlan.innerHTML = `Selected plan: #${type.id}`;
    }

    function updateType() {
        type.price = this.getAttribute( 'data-licence-price' );
        type.id    = this.getAttribute( 'data-licence-id' );

        // forEach list and remove active class.
        $licenseTypeList.forEach( item => {
            item.parentElement.parentElement.classList.remove( 'license__type-active' )
        });

        // add active class
        this.parentElement.parentElement.classList.add( 'license__type-active' );
    }
}

