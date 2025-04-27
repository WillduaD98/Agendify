

export class WhatsAppService {
    static async sendConfirmationMessage(phoneNumber: number) {
        console.log(`Enviando mensaje de confirmación a: ${phoneNumber}`)
    
        return Promise.resolve();
    }
}