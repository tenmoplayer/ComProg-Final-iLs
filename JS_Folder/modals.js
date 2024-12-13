const modal = document.getElementById('checkoutmodal');

function showmodal() {
    modal.style.display = 'block';
}

function hidemodal() {
    modal.style.display = 'none';
}



const huh = document.getElementById('listCard');
const checkout = document.getElementById('total');
const itemcountid = document.getElementById('itemcount'); // Corrected selector
checkout.addEventListener('click', ()=>{
    body.classList.remove('active');
})

// Initial check
if (!huh.innerHTML.trim()) {
    checkout.style.pointerEvents = 'none'; // Disable pointer events
}

// Function to monitor changes and restore pointer events
const observeDivContent = () => {
    if (huh.innerHTML.trim()) {
        checkout.style.pointerEvents = 'auto'; // Enable pointer events
    } else {
        checkout.style.pointerEvents = 'none'; // Disable pointer events
    }
};

// Use MutationObserver to monitor changes in the div content
const observer = new MutationObserver(observeDivContent);
observer.observe(huh, { childList: true, subtree: true });

// Optional: Call `observeDivContent()` manually if needed
observeDivContent();

$(document).ready(function(){
    $("#total").click(function(){
      $(".listCard").clone().appendTo(".target");
    });
  });
$(document).ready(function(){
    $("#total").click(function(){
        $(".total").clone().appendTo(".sum");
    });
});

$(document).ready(function(){
    $("#cancel").click(function(){
        $("#checkoutmodal").css({
            "display": "none"
        });
        $(".target").empty();
        $(".sum").empty();
    });
});
$(document).ready(function() {
    // When the second pickup method is selected
    $('#pickupmethod2').on('change', function() {
        if ($(this).is(':checked')) { // Check if pickupmethod2 is on
            // Disable pointer events for payment method, div2, and div3
            $('.paymentmethod, .div2, .div3').css({
                'pointer-events': 'none',
                'opacity': '0.4'
            });
            $('#deliveryfee').css({
                'text-decoration': 'line-through',
                'opacity': '0.5'
            });
            $('#sumofall').html('₱' + totalPrice);
    
            // Set up button click handler
            $('#yesnow').off('click').on('click', function() {

                    $(".oncounter").toggle();
                    $(".confirmation").toggle();
            });
        } else {
            // Re-enable pointer events if unchecked
            $('.paymentmethod, .div2, .div3').css({
                'pointer-events': 'auto',
                'opacity': '1'
            });
            $('#deliveryfee').css({
                'text-decoration': 'none',
                'opacity': '1'
            });
    
            // Clear the message display handler
            $('#myButton').off('click');
        }
    });
    

    // When the first pickup method is selected (reset everything)
    $('#pickupmethod1').on('change', function() {
        // Reset pointer events to default
        $('.paymentmethod, .div2, .div3').css({
            'pointer-events': 'auto',
            'opacity': '1'});
        $('#deliveryfee').css({
            'text-decoration': 'none',
            'opacity': '1'
        })
        $('#sumofall').html('₱'+(totalPrice + 30));
    });
    $('#paymentmethod2').on('change', function() {
        // Reset pointer events to default
        $('.div3').css({
            'pointer-events': 'auto',
            'opacity': '1'
        });
    });
    $('#paymentmethod1').on('change', function() {
        // Reset pointer events to default
        $('.div3').css({
            'pointer-events': 'auto',
            'opacity': '0.5'
        });
    });
});
$(document).ready(function(){
    $("#yesnow").click(function(){
      $(".oncounter").toggle();
      $(".confirmation").toggle();
    });
    $("#backcounter").click(function(){
        $(".oncounter").toggle();
      });
  });
$(document).ready(function(){
    $("#placeordernow").click(function(){
      $(".confirmation").toggle();
    });
  });
  $(document).ready(function(){
    $("#backnow").click(function(){
      $("#totalmodal").toggle();
    });
  });


  function generateSixDigitNumber() {
    // Generate a random 6-digit number
    const sixDigitNumber = Math.floor(100000 + Math.random() * 900000);

    // Display the number in an HTML element with the ID 'displayNumber'
    document.getElementById('displayNumber').textContent = sixDigitNumber;
}
function scrollToDestinationX(targetId) {
    const container = document.getElementById('drinkslist');
    const target = document.getElementById(targetId);

    if (container && target) {
        const targetPosition = target.offsetLeft; // Distance of target from the top of the container

        container.scrollTo({
            left: targetPosition + -90, // Scroll to the target position
            behavior: 'smooth'   // Smooth scrolling animation
        });
    } else {
        console.error("Container or target element not found");
    }
}
function scrollToDestinationM(targetId) {
    const container = document.getElementById('foodlist');
    const target = document.getElementById(targetId);

    if (container && target) {
        const targetPosition = target.offsetLeft; // Distance of target from the top of the container

        container.scrollTo({
            left: targetPosition + -90, // Scroll to the target position
            behavior: 'smooth'   // Smooth scrolling animation
        });
    } else {
        console.error("Container or target element not found");
    }
}
function scrollToDestinationA(targetId) {
    const container = document.getElementById('twocontainment');
    const target = document.getElementById(targetId);

    if (container && target) {
        const targetPosition = target.offsetLeft; // Distance of target from the top of the container

        container.scrollTo({
            left: targetPosition + -90, // Scroll to the target position
            behavior: 'smooth'   // Smooth scrolling animation
        });
    } else {
        console.error("Container or target element not found");
    }
}
