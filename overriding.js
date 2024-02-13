/* Overidding */
// Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya.

// Constructor Overidding
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService {
  // Overidding constructor
  constructor(sender, isBusiness) {
    this.sender = sender;
    this.isBusiness = isBusiness;
  }
}

const whatsapp = new WhatsAppService("+6281234567890", true);

/**
 * Output:
 * ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
 */

// Method Overidding
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log("message sent via WhatsApp");
  }
}

const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");

/**
 * Output:
 * someSender sent Hai, apa kabar? to someReceiver
 * +6281234567890 sent Hai, apa kabar? to +6289876543210
 * message sent via WhatsApp
 */
