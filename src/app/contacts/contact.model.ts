export class Contact {
  constructor(
    public contactId: number,
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public group: Contact[]
  ) {
  }
}
