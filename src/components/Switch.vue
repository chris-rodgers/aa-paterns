<script>
export const SwitchContainer = {
  render() {
    return <div class="switch">{this.$slots.default}</div>;
  }
};

export const SwitchItem = {
  props: {
    onChange: {
      type: Function,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    name: {
        type: String,
        required: true
    },
    checked: {
        default: false,
        type: Boolean
    },
    type: {
        default: 'radio',
        type: String
    }  
  },
  methods: {
    handleChange(){
      this.onChange(Array.from(document.querySelectorAll(`.switch__input[name="${this.name}"]:checked`)).reduce((a, c) => {
        return [...a, c.value]
      }, []))
    }
  },
  render() {
    return (
      <label class="switch__label">
        <input class="switch__input" name={this.name} value={this.value} type={this.type} checked={this.checked} onChange={this.handleChange} />
        <div class="switch__text">{this.$slots.default}</div>
      </label>
    );
  }
};

export default SwitchContainer;

</script>

<style lang="scss">
.switch {
  margin-bottom: $global-spacing;
  border-radius: $global-radius;
  padding: $global-spacing-small;
  background: #eeeeee;
  display: inline-flex;
  flex-wrap: wrap;
  text-align: center;
  &__label {
    flex: 1;
    cursor: pointer;
  }
  &__text {
    padding: $global-spacing-small $global-spacing-medium;
    border-radius: $global-radius-small;
  }
  &__input {
    display: none;
    &:checked + .switch__text {
      background: white;
    }
  }
}
</style>