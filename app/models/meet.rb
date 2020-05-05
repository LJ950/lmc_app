class Meet < ApplicationRecord
	has_many :attendees
	has_many :members, :through => :attendees

	MEET_TYPES = ["Hut", "Camping", "Day", "Evening"]

	validates :number_of_nights, numericality: { only_integer: true, allow_nil: true }
	validates :meet_type, presence: true, inclusion: { in: MEET_TYPES }
	validates :location, presence: true, length: { maximum: 100 }
	validates :places, numericality: {only_integer: true, allow_nil: true}
end