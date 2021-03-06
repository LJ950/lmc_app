module MembersHelper

	def membership_level(member)
		if member.membership.committee_position
			"#{member.membership.committee_position}"
		else
			"#{member.membership.membership_type} Member"
		end
	end

	def committee_member?(member)
		!member.membership.committee_position.nil?
	end

	def latest_update(member)
		update = [member.updated_at, member.membership.updated_at].max
		update.strftime("%d/%m/%Y")
	end

	def created_at(member)
		member.created_at.strftime("%d/%m/%Y")
	end

	def updated_at(member)
		member.updated_at.strftime("%d/%m/%Y")
	end

	def new_member?(member)
		membership_level(member) == "Provisional (unpaid) Member"
	end

	def em_contact?(member)
		true if member.emergency_contact.primary_phone.nil?
	end
end
