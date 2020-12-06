function solve() {
    class VeterinaryClinic {
        constructor(clinicName, capacity) {
            this.clinicName = clinicName;
            this.capacity = capacity;
            this.clients = [];
            this.totalProfit = 0;
            this.workLoad = 0;

        }
        newCustomer(ownerName, petName, kind, procedures) {
            
            if (this.capacity < this.workLoad) {
                throw new Error(`Sorry, we are not able to accept more patients!`)
            }
        }
        onLeaving(ownerName, petName) {
            let ownerNameIndex = this.clients.indexOf(ownerName)
            if (!(this.clients[ownerNameIndex[0]] == ownerName)) {
                throw new Error(`Sorry, there is no such client!`)
            } else {
                if (this.clients[ownerNameIndex[1] == petName] == false || procedures <= 0) {
                    throw new Error(`Sorry, there are no procedures for ${petName}!`)
                } else {
                    this.totalProfit = procedures.length * 500;
                    this.procedures = [];
                    this.workLoad--;
                    return `Goodbye ${petName}. Stay safe!`
                }
            }
        }
        toString() {

        }



    }
    return { VeterinaryClinic };
}