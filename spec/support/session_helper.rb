module SessionHelpers
  def auth_token(current_user)
    current_user.create_new_auth_token
  end
end
RSpec::Matchers.define_negated_matcher :not_change, :change
