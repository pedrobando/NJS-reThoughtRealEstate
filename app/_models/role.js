const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  action: String, // e.g., "delete", "edit", "view"
  subject: String, // e.g., "Transaction", "Role", "Listing"
  allowed: Boolean // true if allowed, false if not
});

const roleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  permissions: [permissionSchema]
});

const Role = mongoose.model('Role', roleSchema);