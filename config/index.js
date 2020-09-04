const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/interview-test-database', {useNewUrlParser: true});
autoIncrement.initialize(mongoose.connection);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const Schema = mongoose.Schema;

const customerPOSchema = new Schema({
  customerPO: {
    type: Number,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  deliverablesType: {
    type: String,
    required: true,
    default: 'New Site'
  }
});

customerPOSchema.plugin(autoIncrement.plugin, {
  model: 'CustomerPO',
  field: 'customerPO',
  startAt: 111111,
  incrementBy: 1
});
const CustomerPO = mongoose.model('CustomerPO', customerPOSchema);

const siteSchema = new Schema({
  siteId: {
    type: Number,
    required: true,
    unique: true
  },
  siteName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  }
});

siteSchema.plugin(autoIncrement.plugin, {
  model: 'Site',
  field: 'siteId',
  startAt: 1,
  incrementBy: 1
});
const Site = mongoose.model('Site', siteSchema);

const deliverablesSchema = new Schema({
  deliverablesID: {
    type: Number,
    required: true,
    unique: true
  },
  customerPO: {
    type: Schema.Types.ObjectId, 
    ref: 'CustomerPO',
    required: true
  },
  siteId: {
    type: Schema.Types.ObjectId, 
    ref: 'Site',
    required: true
  },
  deliverablesType: {
    type: String,
    ref: 'CustomerPO',
    required: true
  },
  installationStart: {
    type: Date,
    default: Date.now,
    required: true
  },
  installationFinish: {
    type: Date
  }
});

deliverablesSchema.plugin(autoIncrement.plugin, {
  model: 'Deliverables',
  field: 'deliverablesID',
  startAt: 1,
  incrementBy: 1
});
const Deliverables = mongoose.model('Deliverables', deliverablesSchema);

module.exports = { CustomerPO, Site, Deliverables };